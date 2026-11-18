import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusPointed: ForwardRefExoticComponent<ChatMinusPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusPointed;
export { ChatMinusPointed };
