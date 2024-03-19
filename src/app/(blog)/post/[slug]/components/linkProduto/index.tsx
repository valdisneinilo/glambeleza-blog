import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

import { AffiliateLinkProps } from "@/src/data/types/post";
import Link from "next/link";

interface AmazonAffiliateLinkProps {
  affiliates: AffiliateLinkProps[];
}

export const AffiliateLink: React.FC<AmazonAffiliateLinkProps> = ({
  affiliates,
}) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          {affiliates?.map((item) => {
            return (
              item && (
                <li key={item.href}>
                  <Link href={item.href} target="_blank">
                    <h2>Mascara nutritiva pantene bambu</h2>
                    <br />
                    <Image
                      src={item.image}
                      alt={item.platform}
                      width={200}
                      height={200}
                    />

                    <button className={styles.btnComprar}>
                      Comprar produto
                    </button>
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
