import React, { useRef, useState } from 'react'
interface Person {
  name:string
}
interface Props   {
  text: string;
  signedUp?: boolean;
  volume?: number;
  person?:Person;
}

export const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<number | null>(4); //hooks are inferred
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
  <input ref={inputRef} />
  </div>
  );
};

