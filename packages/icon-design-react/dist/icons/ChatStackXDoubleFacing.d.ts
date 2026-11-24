import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXDoubleFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXDoubleFacing: ForwardRefExoticComponent<ChatStackXDoubleFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXDoubleFacing;
export { ChatStackXDoubleFacing };
