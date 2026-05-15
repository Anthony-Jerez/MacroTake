import { Meal } from '@/storage/meals';
import { colors } from '@/styles/global';
import { totalMacrosLogged } from '@/utils/helpers';
import { Ionicons } from '@expo/vector-icons';
import { Share, TouchableOpacity } from 'react-native';

type ShareButtonProps = {
  meals: Meal[];
};

export default function ShareButton({ meals }: ShareButtonProps) {
  const handleShare = async () => {
    const totals = totalMacrosLogged(meals);

    await Share.share({
      message: `MacroTake Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name='share-outline' size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}