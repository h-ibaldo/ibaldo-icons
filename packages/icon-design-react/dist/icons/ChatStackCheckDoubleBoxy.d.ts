import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckDoubleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckDoubleBoxy: ForwardRefExoticComponent<ChatStackCheckDoubleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckDoubleBoxy;
export { ChatStackCheckDoubleBoxy };
