import { supabase } from '../config/supabase';

export async function verifyData() {
  console.log('Checking database...');
  
  const { data, error } = await supabase
    .from('businesses')
    .select('count');

  if (error) {
    console.error('Database check failed:', error);
    return false;
  }

  const count = data?.[0]?.count || 0;
  console.log('Found businesses:', count);
  return count > 0;
}