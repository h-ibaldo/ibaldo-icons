import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOffBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOffBoxy: ForwardRefExoticComponent<ChatStackOffBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOffBoxy;
export { ChatStackOffBoxy };
