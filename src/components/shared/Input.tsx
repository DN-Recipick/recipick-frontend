import { type InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapClassname?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, wrapClassname, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className={clsx('flex-column gap-2', wrapClassname)}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium">
            {label}
          </label>
        )}
        <input
          autoComplete="off"
          id={inputId}
          ref={ref}
          style={{ outlineColor: 'var(--color-primary)' }}
          className={clsx(
            'rounded',
            error ? 'border-[var(--color-danger)] focus:outline-0' : 'border-gray-300',
            className,
          )}
          {...props}
        />
        {<p className="danger">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
