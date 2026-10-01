interface TableProps {
  rowsLength?: number;
  className?: string;
}

export default function Table({ rowsLength = 6, className = "" }: TableProps) {
  return (
    <div role="table" aria-label={""} className={className}>
      <div role="rowgroup">
        {Array.from({ length: rowsLength }).map((_, index) => (
          <div key={index} role="row">
            <div role="columnheader">Ред {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
