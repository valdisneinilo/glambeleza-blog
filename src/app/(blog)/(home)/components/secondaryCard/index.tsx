import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { PostProps } from "@/src/data/types/post";

export default function SecondaryCard(post: PostProps) {
  return (
    <li key={post.id} className={styles.item}>
      <nav>
        <Link href={`/post/${post.slug}`}>
          <div className={styles.contImg}>
            <Image
              src={post.image?.src}
              alt={post.image?.alt}
              width={310}
              height={280}
              quality={80}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.tag}>{post.tag?.toUpperCase()}</p>
            <h2 className={styles.titlePost} id="highlightable">
              {post.title}
            </h2>
            <div className={styles.autorDate}>
              <div className={styles.autor}>
                <div className={styles.avatar}>
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={25}
                    height={25}
                    quality={100}
                  />
                </div>
                <div className={styles.nome}>{post.author.name}</div>
              </div>
              <p className={styles.date}>{moment(post.date).format("LL")}</p>
            </div>
          </div>
        </Link>
      </nav>
    </li>
  );
}
