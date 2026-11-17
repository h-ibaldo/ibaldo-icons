import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStarCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStarCornerBoxy: ForwardRefExoticComponent<ChatStarCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStarCornerBoxy;
export { ChatStarCornerBoxy };
