import { useState, FormEvent, useCallback } from 'react';

interface UseInputProps {
  onSubmit: (value: string) => void;
  isLoading?: boolean;
}

export const useInput = ({ onSubmit, isLoading = false }: UseInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() && !isLoading) {
      onSubmit(inputValue);
      setInputValue('');
    }
  }, [inputValue, isLoading, onSubmit]);

  return {
    inputValue,
    handleInputChange,
    handleSubmit
  };
};
