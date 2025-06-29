import { createPortal } from 'react-dom';
import { useModalStore } from '@/store/useModalStore';
import Button from '@/components/shared/Button';
import { HiX } from 'react-icons/hi';
import { useModalEffect } from '@/components/shared/hook/useModalEffect';
import IngredientDetail from '@/features/MyRecipeDetail/components/IngredientDetail';

const Modal = () => {
  const { data, type, isOpen, close } = useModalStore();
  useModalEffect({ isOpen, onClose: close });

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex-center bg-black/50" onClick={close}>
      <div
        className="bg-white dark:bg-gray-800 py-3 px-5 rounded-md shadow-xl max-w-xl w-full min-h-1/2 
              transition-all duration-300 transform -translate-y-5 opacity-0 max-h-[80vh] overflow-y-auto
              animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-center h-15 content-center">{data?.title}</h3>
        <Button onClick={close} className="btn-icon text-gray-500 absolute right-2 top-2">
          <HiX className="text-2xl" />
        </Button>
        {type === 'ingredient' && (
          <IngredientDetail ingredientKeyword={data?.ingredientKeyword as string} />
        )}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
