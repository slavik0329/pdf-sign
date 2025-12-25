import { CSSProperties } from "react";
import { BigButton } from "./BigButton";
import { primary45 } from "../utils/colors";

interface PagingControlProps {
  totalPages: number;
  pageNum: number;
  setPageNum: (page: number) => void;
}

export default function PagingControl({ totalPages, pageNum, setPageNum }: PagingControlProps) {
  const styles: { container: CSSProperties; inlineFlex: CSSProperties; pageInfo: CSSProperties } = {
    container: {
      marginTop: 8,
      marginBottom: 8,
    },
    inlineFlex: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    pageInfo: {
      padding: 8,
      color: primary45,
      fontSize: 14,
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inlineFlex}>
        <BigButton
          title={"<"}
          onClick={() => setPageNum(pageNum - 1)}
          disabled={pageNum - 1 === -1}
        />
        <div style={styles.pageInfo}>
          Page: {pageNum + 1}/{totalPages}
        </div>
        <BigButton
          title={">"}
          onClick={() => setPageNum(pageNum + 1)}
          disabled={pageNum + 1 > totalPages - 1}
        />
      </div>
    </div>
  );
}
