import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangleFacing: ForwardRefExoticComponent<ChatStackTriangleFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangleFacing;
export { ChatStackTriangleFacing };
