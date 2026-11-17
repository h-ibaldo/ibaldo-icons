import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackBoxy: ForwardRefExoticComponent<ChatStackBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackBoxy;
export { ChatStackBoxy };
