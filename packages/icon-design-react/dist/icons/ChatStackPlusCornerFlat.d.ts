import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusCornerFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusCornerFlat: ForwardRefExoticComponent<ChatStackPlusCornerFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusCornerFlat;
export { ChatStackPlusCornerFlat };
