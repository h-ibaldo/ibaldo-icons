import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEdit: ForwardRefExoticComponent<ChatStackEditProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEdit;
export { ChatStackEdit };
