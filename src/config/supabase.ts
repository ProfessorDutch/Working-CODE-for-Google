import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = 'https://uuqnzcfzmwfwtoxuggey.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cW56Y2Z6bXdmd3RveHVnZ2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5OTc2MjMsImV4cCI6MjA0ODU3MzYyM30.qcLVQZtB0hJgvSz8N98f8z8uxY6rWmBOZIYOWzAZ6Js';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  }
});

export async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('churches')
      .select('count')
      .single();

    if (error) {
      console.error('Database connection error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Connection test failed:', err);
    return { 
      success: false, 
      error: err instanceof Error ? err.message : 'Unknown error occurred' 
    };
  }
}