import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckDoubleFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckDoubleFacing: ForwardRefExoticComponent<ChatStackCheckDoubleFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckDoubleFacing;
export { ChatStackCheckDoubleFacing };
