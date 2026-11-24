import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCornerBoxy: ForwardRefExoticComponent<ChatXCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatXCornerBoxy;
export { ChatXCornerBoxy };
