import "moment/locale/pt-br";
import { Metadata } from "next";
import styles from "./page.module.css";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { AffiliateLink } from "./components/linkProduto";
import { BiArrowBack } from "react-icons/bi";
import { api } from "@/src/data/api";
import { PostProps } from "@/src/data/types/post";

async function getPost(slug: string): Promise<PostProps> {
  const response = await api(`/post/${slug}`);
  const data = await response.json();
  return data.post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getPost(params.slug);
  return {
    title: data?.title,
    description: data?.summary,
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.tag}>{data?.tag}</div>
      <h1 className={styles.titulo}>{data?.title}</h1>
      <div className={styles?.autor}>
        <div className={styles?.avatar}>
          <Image
            src={data?.author?.avatar}
            alt={data?.author?.name}
            width={50}
            height={50}
            quality={80}
          />
        </div>
        <div className={styles.nome}>{data?.author?.name}</div>
      </div>
      <div className={styles.date}>{moment(data?.created_at).format("LL")}</div>
      <div className={styles.contImg}>
        <Image
          src={data?.image}
          alt={data?.title}
          width={1000}
          height={400}
          quality={100}
        />
      </div>
      <p className={styles.resumo}>{data?.summary}</p>

      {data?.paragraphs?.map((paragraph, index) => (
        <div key={index}>
          {paragraph.affiliates && (
            <div>
              <AffiliateLink affiliates={paragraph?.affiliates} />
            </div>
          )}

          <p className={styles.paragrafo}>{paragraph.text}</p>
          {paragraph.image && (
            <Image
              alt={paragraph.text}
              src={paragraph.image}
              width={250}
              height={250}
            />
          )}
        </div>
      ))}

      <Link href="/" className={styles.voltar}>
        <BiArrowBack /> Voltar
      </Link>
    </div>
  );
}
