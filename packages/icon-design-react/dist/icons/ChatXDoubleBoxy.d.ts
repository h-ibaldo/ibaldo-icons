import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDoubleBoxy: ForwardRefExoticComponent<ChatXDoubleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatXDoubleBoxy;
export { ChatXDoubleBoxy };
