import styles from "./table.module.scss";

interface TableProps {
  rowsLength?: number;
  className?: string;
  data: any;
}

export default function Table({
  rowsLength = 6,
  className = "",
  data,
}: TableProps) {
  return (
    <>
      <h2 className={styles.tableTitle}>Star Wars characters info</h2>
      <div role="table" className={`${styles.table} ${className}`}>
        <div role="rowgroup">
          {Array.from({ length: rowsLength }).map((_, index) => (
            <div key={index} role="row" className={styles.rowWrapper}>
              <div role="columnheader" className={styles.row}>
                <span className={styles.cellTitle}>name</span>{" "}
                <span className={styles.cellValue}>{data?.[index]?.name}</span>
              </div>
              <div role="columnheader" className={styles.row}>
                <span className={styles.cellTitle}>mass</span>{" "}
                <span className={styles.cellValue}>{data?.[index]?.mass}</span>
              </div>
              <div role="columnheader" className={styles.row}>
                <span className={styles.cellTitle}>height</span>{" "}
                <span className={styles.cellValue}>
                  {data?.[index]?.height}
                </span>
              </div>
              <div role="columnheader" className={styles.row}>
                <span className={styles.cellTitle}>hair color</span>{" "}
                <span className={styles.cellValue}>
                  {data?.[index]?.hair_color}
                </span>
              </div>
              <div role="columnheader" className={styles.row}>
                <span className={styles.cellTitle}>skin color</span>{" "}
                <span className={styles.cellValue}>
                  {data?.[index]?.skin_color}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
