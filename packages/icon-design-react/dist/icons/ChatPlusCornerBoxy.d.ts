import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCornerBoxy: ForwardRefExoticComponent<ChatPlusCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCornerBoxy;
export { ChatPlusCornerBoxy };
