import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCornerBoxy: ForwardRefExoticComponent<ChatCheckDoubleCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCornerBoxy;
export { ChatCheckDoubleCornerBoxy };
