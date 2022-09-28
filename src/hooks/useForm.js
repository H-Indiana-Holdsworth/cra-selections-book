import { useState } from 'react';

function useForm() {
  const [section, setSection] = useState({ id: '' });

  const onSelect = ({ item }) => {
    setSection(item);
    parseInt(item.id);
  };
  console.log('section :>> ', typeof section.id);

  return { section, onSelect };
}

export { useForm };
