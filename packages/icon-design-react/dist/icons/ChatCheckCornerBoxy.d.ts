import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCornerBoxy: ForwardRefExoticComponent<ChatCheckCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCornerBoxy;
export { ChatCheckCornerBoxy };
