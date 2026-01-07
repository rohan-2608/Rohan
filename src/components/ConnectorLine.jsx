export default function ConnectorLine({ anchor }) {
  const x1 = anchor.right;
  const y1 = anchor.top + anchor.height / 2;

  const x2 = x1 + 60;
  const y2 = y1;

  const controlX = x1 + 30;

  return (
    <svg className="connector">
      <path
        d={`M ${x1} ${y1} Q ${controlX} ${y1 - 30}, ${x2} ${y2}`}
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
