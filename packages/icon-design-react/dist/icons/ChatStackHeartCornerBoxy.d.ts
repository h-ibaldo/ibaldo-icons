import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartCornerBoxy: ForwardRefExoticComponent<ChatStackHeartCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartCornerBoxy;
export { ChatStackHeartCornerBoxy };
