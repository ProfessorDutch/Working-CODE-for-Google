import { supabase } from '../config/supabase';

export async function verifyDatabase() {
  try {
    const { data, error } = await supabase
      .from('businesses')
      .select('*');

    if (error) {
      console.error('Database error:', error);
      return false;
    }

    console.log('Database check:', {
      businessCount: data?.length || 0,
      sampleBusiness: data?.[0]
    });

    return data?.length > 0;
  } catch (err) {
    console.error('Verification failed:', err);
    return false;
  }
}