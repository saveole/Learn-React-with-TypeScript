type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
};

export function Checklist<Data>({ data, id, primary, secondary }: Props<Data>) {
  return (
    <ul className="bg-gray-300 rounded p-10">
      {data.map((item) => {
        const idValue = item[id] as unknown;
        if (typeof idValue !== 'string' && typeof idValue !== 'number') {
          return null;
        }
        const pText = item[primary] as unknown;
        if (typeof pText !== 'string') {
          return null;
        }
        const sText = item[secondary] as unknown;

        return (
          <li key={idValue} className="bg-white p-6 shadow rounded mb-4 last:mb-0">
            <div className="text-xl text-gray-800 pb-1">{pText}</div>
            {typeof sText === 'string' && <div className="text-sm text-gray-500">{sText}</div>}
          </li>
        );
      })}
    </ul>
  );
}
