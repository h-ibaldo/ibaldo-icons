import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOffBoxy: ForwardRefExoticComponent<ChatOffBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatOffBoxy;
export { ChatOffBoxy };
