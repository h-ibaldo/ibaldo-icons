import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusCornerFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusCornerFlat: ForwardRefExoticComponent<ChatStackMinusCornerFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusCornerFlat;
export { ChatStackMinusCornerFlat };
