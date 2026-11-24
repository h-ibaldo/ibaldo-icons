import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlus: ForwardRefExoticComponent<ChatStackPlusProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlus;
export { ChatStackPlus };
