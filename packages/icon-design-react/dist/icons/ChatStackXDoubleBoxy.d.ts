import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXDoubleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXDoubleBoxy: ForwardRefExoticComponent<ChatStackXDoubleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXDoubleBoxy;
export { ChatStackXDoubleBoxy };
