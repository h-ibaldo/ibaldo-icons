import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextBoxy: ForwardRefExoticComponent<ChatStackTextBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextBoxy;
export { ChatStackTextBoxy };
