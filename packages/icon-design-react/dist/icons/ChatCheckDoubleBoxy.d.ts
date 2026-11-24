import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleBoxy: ForwardRefExoticComponent<ChatCheckDoubleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleBoxy;
export { ChatCheckDoubleBoxy };
