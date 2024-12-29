import { supabase } from '../../config/supabase';

export async function verifyBusinessData() {
  const { data, error } = await supabase
    .from('businesses')
    .select('*');

  if (error) {
    console.error('Data verification failed:', error);
    return false;
  }

  console.log('Found businesses:', data?.length);
  return data?.length > 0;
}