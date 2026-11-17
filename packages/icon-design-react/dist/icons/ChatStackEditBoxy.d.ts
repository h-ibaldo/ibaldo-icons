import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEditBoxy: ForwardRefExoticComponent<ChatStackEditBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEditBoxy;
export { ChatStackEditBoxy };
