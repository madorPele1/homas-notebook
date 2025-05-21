function TableBlock({ headers, rows }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th className="table-header" key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => {
              if (typeof cell === 'object' && cell !== null) {
                const { content, colSpan, rowSpan } = cell;
                return (
                  <td
                    key={j}
                    colSpan={colSpan || undefined}
                    rowSpan={rowSpan || undefined}
                  >
                    {content}
                  </td>
                );
              } else {
                return <td key={j}>{cell}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableBlock;
