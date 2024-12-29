import { supabase } from '../config/supabase';

export async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // Basic connection test
    const { data, error } = await supabase
      .from('businesses')
      .select('count');

    if (error) {
      console.error('Connection failed:', error);
      return false;
    }

    // Log the result
    console.log('Connection successful:', {
      count: data?.[0]?.count || 0
    });

    return true;
  } catch (err) {
    console.error('Connection test failed:', err);
    return false;
  }
}