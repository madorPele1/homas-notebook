function TableBlock({ headers, rows }) {
  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', margin: '1rem 0' }}>
      <thead>
        <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableBlock;