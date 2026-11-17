import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslateChatStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslateChatStack: ForwardRefExoticComponent<TranslateChatStackProps & RefAttributes<SVGSVGElement>>;

export default TranslateChatStack;
export { TranslateChatStack };
