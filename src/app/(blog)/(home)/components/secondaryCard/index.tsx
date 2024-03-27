import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { PostProps } from "@/src/data/types/post";
import MarkText from "../../components/markText";

export default async function SecondaryCard(post: PostProps) {
  return (
    <div key={post?.id} className={styles.container}>
      <Link href={`/post/${post?.slug}`} title={post?.title}>
        <div className={styles.cont}>
          <div className={styles.contImg}>
            <Image
              src={post?.image || "/logo.png"}
              alt={"Imagem principal do conteúdo sobre " + post?.title}
              width={310}
              height={280}
              quality={100}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.tag}>{post?.tag?.toUpperCase()}</p>
            <h2 className={styles.titlePost} id="highlightable">
              <MarkText>{post?.title}</MarkText>
            </h2>
            <div className={styles.autorDate}>
              <div className={styles.autor}>
                <div className={styles.avatar}>
                  <Image
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                    width={25}
                    height={25}
                    quality={100}
                  />
                </div>
                <div className={styles.nome}>{post?.author?.name}</div>
              </div>
              <p className={styles.date}>
                {moment(post?.created_at).format("LL")}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
