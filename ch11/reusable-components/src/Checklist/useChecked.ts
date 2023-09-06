import { useState } from 'react';
import { IdValue } from './types';

export function useChecked() {
  const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);
  // https://javascript.info/currying-partials
  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = checkedIds.includes(checkedId);
    let newCheckedIds = isChecked
      ? checkedIds.filter((itemCheckedid: IdValue) => itemCheckedid !== checkedId)
      : checkedIds.concat(checkedId);
    setCheckedIds(newCheckedIds);
  };
  return { handleCheckChange, checkedIds };
}
