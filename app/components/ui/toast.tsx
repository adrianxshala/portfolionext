import * as React from "react";

export interface ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type ToastActionElement = React.ReactElement;

const Toast = React.forwardRef<
  HTMLDivElement,
  Partial<ToastProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof ToastProps>
>(
  (
    { className, id, title, description, action, open, onOpenChange, ...props },
    ref
  ) => {
    return <div ref={ref} className={className} {...props} />;
  }
);
Toast.displayName = "Toast";

const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
      {...props}
    />
  );
});
ToastViewport.displayName = "ToastViewport";

const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className="text-sm font-semibold" {...props} />;
});
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className="text-sm opacity-90" {...props} />;
});
ToastDescription.displayName = "ToastDescription";

const ToastAction = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => (
  <button className="" {...props} />
);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export {
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastProvider,
};
