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
    <div role="table" aria-label={""} className={className}>
      <div role="rowgroup">
        {Array.from({ length: rowsLength }).map((_, index) => (
          <div key={index} role="row">
            <div role="columnheader">{data?.[index]?.name}</div>
            <div role="columnheader">{data?.[index]?.mass}</div>
            <div role="columnheader">{data?.[index]?.height}</div>
            <div role="columnheader">{data?.[index]?.hair_color}</div>
            <div role="columnheader">{data?.[index]?.skin_color}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
