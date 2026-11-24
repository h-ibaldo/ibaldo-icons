import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotBoxy: ForwardRefExoticComponent<ChatDotBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatDotBoxy;
export { ChatDotBoxy };
