'use client';

import { ButtonHTMLAttributes } from 'react';
import { Button } from '@/ui/Button';
import { toast } from '@/ui/Toast';
import { Copy } from 'lucide-react';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: React.FunctionComponent<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);
        toast({
          title: 'Copied',
          message: 'Your API key has been copied to your clipboard',
          type: 'success',
        });
      }}
      variant="ghost"
      className={className}>
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
