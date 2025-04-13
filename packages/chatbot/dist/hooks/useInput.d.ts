import { FormEvent } from 'react';

interface UseInputProps {
    onSubmit: (value: string) => void;
    isLoading?: boolean;
}
export declare const useInput: ({ onSubmit, isLoading }: UseInputProps) => {
    inputValue: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
export {};
