export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      addon_definitions: {
        Row: {
          addon_code: string
          addon_description: string | null
          addon_metadata: Json | null
          addon_name: string
          addon_type: string
          created_at: string | null
          credits_amount: number | null
          currency: string | null
          expires_after_days: number | null
          feature_unlocks: Json | null
          id: string
          is_active: boolean | null
          max_purchases_per_user: number | null
          price_usd: number
          requires_subscription_tier: string[] | null
          tokens_amount: number | null
          updated_at: string | null
        }
        Insert: {
          addon_code: string
          addon_description?: string | null
          addon_metadata?: Json | null
          addon_name: string
          addon_type: string
          created_at?: string | null
          credits_amount?: number | null
          currency?: string | null
          expires_after_days?: number | null
          feature_unlocks?: Json | null
          id?: string
          is_active?: boolean | null
          max_purchases_per_user?: number | null
          price_usd: number
          requires_subscription_tier?: string[] | null
          tokens_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          addon_code?: string
          addon_description?: string | null
          addon_metadata?: Json | null
          addon_name?: string
          addon_type?: string
          created_at?: string | null
          credits_amount?: number | null
          currency?: string | null
          expires_after_days?: number | null
          feature_unlocks?: Json | null
          id?: string
          is_active?: boolean | null
          max_purchases_per_user?: number | null
          price_usd?: number
          requires_subscription_tier?: string[] | null
          tokens_amount?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      admin_roles: {
        Row: {
          application_required: boolean | null
          assigned_at: string | null
          assigned_by: string | null
          auto_approve: boolean | null
          created_at: string | null
          custom_role_description: string | null
          custom_role_name: string | null
          deletion_protected: boolean | null
          description: string | null
          features: Json | null
          id: string
          permissions: Json | null
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          application_required?: boolean | null
          assigned_at?: string | null
          assigned_by?: string | null
          auto_approve?: boolean | null
          created_at?: string | null
          custom_role_description?: string | null
          custom_role_name?: string | null
          deletion_protected?: boolean | null
          description?: string | null
          features?: Json | null
          id?: string
          permissions?: Json | null
          role: Database["public"]["Enums"]["admin_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          application_required?: boolean | null
          assigned_at?: string | null
          assigned_by?: string | null
          auto_approve?: boolean | null
          created_at?: string | null
          custom_role_description?: string | null
          custom_role_name?: string | null
          deletion_protected?: boolean | null
          description?: string | null
          features?: Json | null
          id?: string
          permissions?: Json | null
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_roles_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_outbox: {
        Row: {
          actor_id: string | null
          attempts: number
          created_at: string
          entity: string | null
          id: string
          item_id: string | null
          last_error: string | null
          next_attempt_at: string
          occurred_at: string
          partition_key: string | null
          payload: Json
          producer: string
          status: string
          type: string
        }
        Insert: {
          actor_id?: string | null
          attempts?: number
          created_at?: string
          entity?: string | null
          id?: string
          item_id?: string | null
          last_error?: string | null
          next_attempt_at?: string
          occurred_at?: string
          partition_key?: string | null
          payload: Json
          producer: string
          status?: string
          type: string
        }
        Update: {
          actor_id?: string | null
          attempts?: number
          created_at?: string
          entity?: string | null
          id?: string
          item_id?: string | null
          last_error?: string | null
          next_attempt_at?: string
          occurred_at?: string
          partition_key?: string | null
          payload?: Json
          producer?: string
          status?: string
          type?: string
        }
        Relationships: []
      }
      app_metrics: {
        Row: {
          id: string
          metric_name: string
          metric_value: number
          tags: Json | null
          timestamp: string | null
        }
        Insert: {
          id?: string
          metric_name: string
          metric_value: number
          tags?: Json | null
          timestamp?: string | null
        }
        Update: {
          id?: string
          metric_name?: string
          metric_value?: number
          tags?: Json | null
          timestamp?: string | null
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          admin_user_id: string | null
          created_at: string | null
          event_type: string
          id: string
          ip_address: unknown
          new_values: Json | null
          old_values: Json | null
          resource_id: string | null
          resource_type: string
          severity: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          admin_user_id?: string | null
          created_at?: string | null
          event_type: string
          id?: string
          ip_address?: unknown
          new_values?: Json | null
          old_values?: Json | null
          resource_id?: string | null
          resource_type: string
          severity?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          admin_user_id?: string | null
          created_at?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown
          new_values?: Json | null
          old_values?: Json | null
          resource_id?: string | null
          resource_type?: string
          severity?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_admin_user_id_fkey"
            columns: ["admin_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      devfactory_runs: {
        Row: {
          created_at: string
          git_sha: string
          id: string
          instance_id: string
          meta: Json
          profile: string
          status: string
          storage_path: string
          summary: Json
          tool: string
        }
        Insert: {
          created_at?: string
          git_sha: string
          id?: string
          instance_id: string
          meta?: Json
          profile: string
          status: string
          storage_path: string
          summary: Json
          tool: string
        }
        Update: {
          created_at?: string
          git_sha?: string
          id?: string
          instance_id?: string
          meta?: Json
          profile?: string
          status?: string
          storage_path?: string
          summary?: Json
          tool?: string
        }
        Relationships: []
      }
      import_session_operations: {
        Row: {
          created_at: string | null
          error_message: string | null
          id: string
          operation_details: Json | null
          operation_type: string
          performed_at: string | null
          performed_by: string | null
          session_id: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          id?: string
          operation_details?: Json | null
          operation_type: string
          performed_at?: string | null
          performed_by?: string | null
          session_id?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          id?: string
          operation_details?: Json | null
          operation_type?: string
          performed_at?: string | null
          performed_by?: string | null
          session_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "import_session_operations_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "import_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      import_sessions: {
        Row: {
          admin_id: string | null
          ai_analysis_report: Json | null
          can_rollback: boolean | null
          column_mappings: Json | null
          completed_at: string | null
          created_at: string | null
          created_by: string | null
          failed_rows: number | null
          file_name: string | null
          file_size: number | null
          id: string
          item_type: string
          metadata: Json | null
          original_filename: string | null
          processed_rows: number | null
          row_count: number | null
          session_name: string
          started_at: string | null
          status: string | null
          storage_path: string | null
          total_rows: number | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          admin_id?: string | null
          ai_analysis_report?: Json | null
          can_rollback?: boolean | null
          column_mappings?: Json | null
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          failed_rows?: number | null
          file_name?: string | null
          file_size?: number | null
          id?: string
          item_type: string
          metadata?: Json | null
          original_filename?: string | null
          processed_rows?: number | null
          row_count?: number | null
          session_name: string
          started_at?: string | null
          status?: string | null
          storage_path?: string | null
          total_rows?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_id?: string | null
          ai_analysis_report?: Json | null
          can_rollback?: boolean | null
          column_mappings?: Json | null
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          failed_rows?: number | null
          file_name?: string | null
          file_size?: number | null
          id?: string
          item_type?: string
          metadata?: Json | null
          original_filename?: string | null
          processed_rows?: number | null
          row_count?: number | null
          session_name?: string
          started_at?: string | null
          status?: string | null
          storage_path?: string | null
          total_rows?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "import_sessions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      import_transactions: {
        Row: {
          created_at: string | null
          data_after: Json | null
          data_before: Json | null
          error_message: string | null
          id: string
          item_id: string | null
          item_type: string | null
          operation: string
          session_id: string | null
          status: string | null
          transaction_type: string
        }
        Insert: {
          created_at?: string | null
          data_after?: Json | null
          data_before?: Json | null
          error_message?: string | null
          id?: string
          item_id?: string | null
          item_type?: string | null
          operation: string
          session_id?: string | null
          status?: string | null
          transaction_type: string
        }
        Update: {
          created_at?: string | null
          data_after?: Json | null
          data_before?: Json | null
          error_message?: string | null
          id?: string
          item_id?: string | null
          item_type?: string | null
          operation?: string
          session_id?: string | null
          status?: string | null
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "import_transactions_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "import_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_notification_events: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          metadata: Json | null
          notification_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          notification_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          notification_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "impulse_notification_events_notification_id_fkey"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "impulse_notifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "impulse_notification_events_notification_id_fkey"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "impulse_user_notifications_current"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "impulse_notification_events_notification_id_fkey"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "impulse_visible_site_notifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "impulse_notification_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_notification_preferences: {
        Row: {
          daily_digest: boolean | null
          digest_time: string | null
          email_enabled: boolean | null
          in_app_enabled: boolean | null
          push_enabled: boolean | null
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          sources_enabled: Json | null
          types_enabled: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          daily_digest?: boolean | null
          digest_time?: string | null
          email_enabled?: boolean | null
          in_app_enabled?: boolean | null
          push_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          sources_enabled?: Json | null
          types_enabled?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          daily_digest?: boolean | null
          digest_time?: string | null
          email_enabled?: boolean | null
          in_app_enabled?: boolean | null
          push_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          sources_enabled?: Json | null
          types_enabled?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "impulse_notification_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_notification_subscriptions: {
        Row: {
          connection_id: string
          created_at: string | null
          device_type: string | null
          id: string
          last_ping: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          connection_id: string
          created_at?: string | null
          device_type?: string | null
          id?: string
          last_ping?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          connection_id?: string
          created_at?: string | null
          device_type?: string | null
          id?: string
          last_ping?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "impulse_notification_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_notifications: {
        Row: {
          action_text: string | null
          action_url: string | null
          auto_dismiss: boolean | null
          auto_dismiss_delay: number | null
          created_at: string | null
          data: Json | null
          dismissible: boolean | null
          expires_at: string | null
          id: string
          message: string
          priority: string | null
          read: boolean | null
          sender_avatar: string | null
          sender_id: string | null
          sender_name: string | null
          severity: string | null
          source: string | null
          target_audience: string | null
          title: string
          type: string
          updated_at: string | null
          user_id: string | null
          xp_awarded: number | null
          xp_claimed: boolean | null
        }
        Insert: {
          action_text?: string | null
          action_url?: string | null
          auto_dismiss?: boolean | null
          auto_dismiss_delay?: number | null
          created_at?: string | null
          data?: Json | null
          dismissible?: boolean | null
          expires_at?: string | null
          id?: string
          message: string
          priority?: string | null
          read?: boolean | null
          sender_avatar?: string | null
          sender_id?: string | null
          sender_name?: string | null
          severity?: string | null
          source?: string | null
          target_audience?: string | null
          title: string
          type: string
          updated_at?: string | null
          user_id?: string | null
          xp_awarded?: number | null
          xp_claimed?: boolean | null
        }
        Update: {
          action_text?: string | null
          action_url?: string | null
          auto_dismiss?: boolean | null
          auto_dismiss_delay?: number | null
          created_at?: string | null
          data?: Json | null
          dismissible?: boolean | null
          expires_at?: string | null
          id?: string
          message?: string
          priority?: string | null
          read?: boolean | null
          sender_avatar?: string | null
          sender_id?: string | null
          sender_name?: string | null
          severity?: string | null
          source?: string | null
          target_audience?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string | null
          xp_awarded?: number | null
          xp_claimed?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "impulse_notifications_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "impulse_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_user_xp: {
        Row: {
          created_at: string | null
          id: string
          last_activity: string | null
          level: number | null
          milestone_reached: string | null
          total_xp: number | null
          updated_at: string | null
          user_id: string
          xp_to_next_level: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_activity?: string | null
          level?: number | null
          milestone_reached?: string | null
          total_xp?: number | null
          updated_at?: string | null
          user_id: string
          xp_to_next_level?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_activity?: string | null
          level?: number | null
          milestone_reached?: string | null
          total_xp?: number | null
          updated_at?: string | null
          user_id?: string
          xp_to_next_level?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "impulse_user_xp_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_xp_audit_log: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          reason: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          reason?: string | null
          status: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          reason?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      impulse_xp_awards_ledger: {
        Row: {
          created_at: string | null
          cred_awarded: number
          event_id: string
          event_key: string
          id: string
          points_awarded: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          cred_awarded?: number
          event_id: string
          event_key: string
          id?: string
          points_awarded?: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          cred_awarded?: number
          event_id?: string
          event_key?: string
          id?: string
          points_awarded?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "impulse_xp_awards_ledger_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "impulse_xp_user_activity"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_xp_badges_catalog: {
        Row: {
          category: string | null
          cred_bonus: number | null
          description: string | null
          icon: string | null
          key: string
          name: string
          points_bonus: number | null
        }
        Insert: {
          category?: string | null
          cred_bonus?: number | null
          description?: string | null
          icon?: string | null
          key: string
          name: string
          points_bonus?: number | null
        }
        Update: {
          category?: string | null
          cred_bonus?: number | null
          description?: string | null
          icon?: string | null
          key?: string
          name?: string
          points_bonus?: number | null
        }
        Relationships: []
      }
      impulse_xp_daily_caps: {
        Row: {
          day: string
          event_key: string
          total_actions_counted: number
          total_points_awarded: number
          user_id: string
        }
        Insert: {
          day: string
          event_key: string
          total_actions_counted?: number
          total_points_awarded?: number
          user_id: string
        }
        Update: {
          day?: string
          event_key?: string
          total_actions_counted?: number
          total_points_awarded?: number
          user_id?: string
        }
        Relationships: []
      }
      impulse_xp_event_definitions: {
        Row: {
          badge_on_first: string[] | null
          cap_actions_daily: number | null
          cap_points_daily: number | null
          cooldown_seconds: number
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean
          key: string
          updated_at: string | null
          weight_cred: number
          weight_points: number
        }
        Insert: {
          badge_on_first?: string[] | null
          cap_actions_daily?: number | null
          cap_points_daily?: number | null
          cooldown_seconds?: number
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          key: string
          updated_at?: string | null
          weight_cred?: number
          weight_points?: number
        }
        Update: {
          badge_on_first?: string[] | null
          cap_actions_daily?: number | null
          cap_points_daily?: number | null
          cooldown_seconds?: number
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          key?: string
          updated_at?: string | null
          weight_cred?: number
          weight_points?: number
        }
        Relationships: []
      }
      impulse_xp_reactions_catalog: {
        Row: {
          created_at: string | null
          description: string | null
          icon: string | null
          is_active: boolean
          key: string
          name: string
          updated_at: string | null
          visible_in_ui: boolean
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          is_active?: boolean
          key: string
          name: string
          updated_at?: string | null
          visible_in_ui?: boolean
        }
        Update: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          is_active?: boolean
          key?: string
          name?: string
          updated_at?: string | null
          visible_in_ui?: boolean
        }
        Relationships: []
      }
      impulse_xp_settings: {
        Row: {
          categories: Json
          cred_model: string
          decay_lambda_per_day: number
          id: number
          multipliers: Json
          reactions_max_per_pair_per_day: number
          streak_cred_cap_days: number
          streak_cred_per_day: number
          updated_at: string | null
        }
        Insert: {
          categories?: Json
          cred_model?: string
          decay_lambda_per_day?: number
          id?: number
          multipliers?: Json
          reactions_max_per_pair_per_day?: number
          streak_cred_cap_days?: number
          streak_cred_per_day?: number
          updated_at?: string | null
        }
        Update: {
          categories?: Json
          cred_model?: string
          decay_lambda_per_day?: number
          id?: number
          multipliers?: Json
          reactions_max_per_pair_per_day?: number
          streak_cred_cap_days?: number
          streak_cred_per_day?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      impulse_xp_settings_history: {
        Row: {
          changed_by: string | null
          created_at: string | null
          id: string
          snapshot: Json
        }
        Insert: {
          changed_by?: string | null
          created_at?: string | null
          id?: string
          snapshot: Json
        }
        Update: {
          changed_by?: string | null
          created_at?: string | null
          id?: string
          snapshot?: Json
        }
        Relationships: []
      }
      impulse_xp_user_activity: {
        Row: {
          client_id: string
          context: Json | null
          event_key: string
          id: string
          object_id: string | null
          object_type: string | null
          occurred_at: string
          occurred_on_utc: string
          units: number | null
          user_id: string
        }
        Insert: {
          client_id: string
          context?: Json | null
          event_key: string
          id?: string
          object_id?: string | null
          object_type?: string | null
          occurred_at?: string
          occurred_on_utc: string
          units?: number | null
          user_id: string
        }
        Update: {
          client_id?: string
          context?: Json | null
          event_key?: string
          id?: string
          object_id?: string | null
          object_type?: string | null
          occurred_at?: string
          occurred_on_utc?: string
          units?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "impulse_xp_user_activity_event_key_fkey"
            columns: ["event_key"]
            isOneToOne: false
            referencedRelation: "impulse_xp_event_definitions"
            referencedColumns: ["key"]
          },
        ]
      }
      impulse_xp_user_badges: {
        Row: {
          badge_key: string
          created_at: string | null
          granted_for: string | null
          id: string
          user_id: string
        }
        Insert: {
          badge_key: string
          created_at?: string | null
          granted_for?: string | null
          id?: string
          user_id: string
        }
        Update: {
          badge_key?: string
          created_at?: string | null
          granted_for?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "impulse_xp_user_badges_badge_key_fkey"
            columns: ["badge_key"]
            isOneToOne: false
            referencedRelation: "impulse_xp_badges_catalog"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "impulse_xp_user_badges_granted_for_fkey"
            columns: ["granted_for"]
            isOneToOne: false
            referencedRelation: "impulse_xp_user_activity"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_xp_user_stats: {
        Row: {
          current_streak: number
          last_action_at: string | null
          last_streak_award_on: string | null
          level: number
          longest_streak: number
          total_cred: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          current_streak?: number
          last_action_at?: string | null
          last_streak_award_on?: string | null
          level?: number
          longest_streak?: number
          total_cred?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          current_streak?: number
          last_action_at?: string | null
          last_streak_award_on?: string | null
          level?: number
          longest_streak?: number
          total_cred?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      maker_pages: {
        Row: {
          banner_url: string | null
          bio: string | null
          created_at: string | null
          featured_build_id: string | null
          featured_printer_id: string | null
          is_published: boolean | null
          slug: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          banner_url?: string | null
          bio?: string | null
          created_at?: string | null
          featured_build_id?: string | null
          featured_printer_id?: string | null
          is_published?: boolean | null
          slug: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          banner_url?: string | null
          bio?: string | null
          created_at?: string | null
          featured_build_id?: string | null
          featured_printer_id?: string | null
          is_published?: boolean | null
          slug?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "maker_pages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_admin_config: {
        Row: {
          config_key: string
          config_type: string
          config_value: Json
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_active: boolean
          requires_restart: boolean
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          config_key: string
          config_type: string
          config_value: Json
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          requires_restart?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          config_key?: string
          config_type?: string
          config_value?: Json
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          requires_restart?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_admin_config_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_admin_config_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_admin_requests: {
        Row: {
          admin_notes: string | null
          created_at: string | null
          description: string | null
          id: string
          implementation_notes: string | null
          implemented_at: string | null
          priority: number | null
          proposed_column_name: string | null
          proposed_data_type: string | null
          request_type: string
          requested_by: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          target_table: string | null
          technical_details: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          implementation_notes?: string | null
          implemented_at?: string | null
          priority?: number | null
          proposed_column_name?: string | null
          proposed_data_type?: string | null
          request_type: string
          requested_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          target_table?: string | null
          technical_details?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          admin_notes?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          implementation_notes?: string | null
          implemented_at?: string | null
          priority?: number | null
          proposed_column_name?: string | null
          proposed_data_type?: string | null
          request_type?: string
          requested_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          target_table?: string | null
          technical_details?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_admin_requests_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_admin_requests_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_api_usage: {
        Row: {
          api_key_hash: string | null
          created_at: string | null
          endpoint: string
          id: string
          ip_address: unknown
          method: string
          rate_limit_exceeded: boolean | null
          referer: string | null
          request_size_bytes: number | null
          requests_this_hour: number | null
          response_size_bytes: number | null
          response_time_ms: number | null
          status_code: number | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          api_key_hash?: string | null
          created_at?: string | null
          endpoint: string
          id?: string
          ip_address?: unknown
          method: string
          rate_limit_exceeded?: boolean | null
          referer?: string | null
          request_size_bytes?: number | null
          requests_this_hour?: number | null
          response_size_bytes?: number | null
          response_time_ms?: number | null
          status_code?: number | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          api_key_hash?: string | null
          created_at?: string | null
          endpoint?: string
          id?: string
          ip_address?: unknown
          method?: string
          rate_limit_exceeded?: boolean | null
          referer?: string | null
          request_size_bytes?: number | null
          requests_this_hour?: number | null
          response_size_bytes?: number | null
          response_time_ms?: number | null
          status_code?: number | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_api_usage_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_attribute_definitions: {
        Row: {
          ai_update_enabled: boolean | null
          data_type: string
          editable_by: string[] | null
          id: string
          instructions: string | null
          is_required: boolean | null
          item_type_id: string
          name: string
          options: Json | null
          parent_attribute_id: string | null
          visible_to: string[] | null
          widget_type: string | null
        }
        Insert: {
          ai_update_enabled?: boolean | null
          data_type: string
          editable_by?: string[] | null
          id?: string
          instructions?: string | null
          is_required?: boolean | null
          item_type_id: string
          name: string
          options?: Json | null
          parent_attribute_id?: string | null
          visible_to?: string[] | null
          widget_type?: string | null
        }
        Update: {
          ai_update_enabled?: boolean | null
          data_type?: string
          editable_by?: string[] | null
          id?: string
          instructions?: string | null
          is_required?: boolean | null
          item_type_id?: string
          name?: string
          options?: Json | null
          parent_attribute_id?: string | null
          visible_to?: string[] | null
          widget_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_attribute_definitions_item_type_id_fkey"
            columns: ["item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_attribute_definitions_item_type_id_fkey"
            columns: ["item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
          {
            foreignKeyName: "mi3dp_attribute_definitions_parent_attribute_id_fkey"
            columns: ["parent_attribute_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_attribute_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_attribute_rules: {
        Row: {
          attribute_id: string | null
          condition: Json | null
          effect: string | null
          id: string
        }
        Insert: {
          attribute_id?: string | null
          condition?: Json | null
          effect?: string | null
          id?: string
        }
        Update: {
          attribute_id?: string | null
          condition?: Json | null
          effect?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_attribute_rules_attribute_id_fkey"
            columns: ["attribute_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_attribute_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_builds: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      mi3dp_categories: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          metadata: Json | null
          name: string
          parent_id: string | null
          slug: string
          sort_order: number | null
          tier: Database["public"]["Enums"]["category_tier"]
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          name: string
          parent_id?: string | null
          slug: string
          sort_order?: number | null
          tier?: Database["public"]["Enums"]["category_tier"]
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          name?: string
          parent_id?: string | null
          slug?: string
          sort_order?: number | null
          tier?: Database["public"]["Enums"]["category_tier"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "vw_primary_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_compatibility_rules: {
        Row: {
          accuracy_rating: number | null
          auto_apply: boolean | null
          compatibility_formula: string | null
          confidence_threshold: number | null
          created_at: string | null
          created_by: string
          detection_method: string
          id: string
          is_active: boolean | null
          last_applied_at: string | null
          matching_attributes: Json
          name: string
          source_item_type_id: string
          target_item_type_id: string
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          accuracy_rating?: number | null
          auto_apply?: boolean | null
          compatibility_formula?: string | null
          confidence_threshold?: number | null
          created_at?: string | null
          created_by: string
          detection_method: string
          id?: string
          is_active?: boolean | null
          last_applied_at?: string | null
          matching_attributes: Json
          name: string
          source_item_type_id: string
          target_item_type_id: string
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          accuracy_rating?: number | null
          auto_apply?: boolean | null
          compatibility_formula?: string | null
          confidence_threshold?: number | null
          created_at?: string | null
          created_by?: string
          detection_method?: string
          id?: string
          is_active?: boolean | null
          last_applied_at?: string | null
          matching_attributes?: Json
          name?: string
          source_item_type_id?: string
          target_item_type_id?: string
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_compatibility_rules_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_compatibility_rules_source_item_type_id_fkey"
            columns: ["source_item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_compatibility_rules_source_item_type_id_fkey"
            columns: ["source_item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
          {
            foreignKeyName: "mi3dp_compatibility_rules_target_item_type_id_fkey"
            columns: ["target_item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_compatibility_rules_target_item_type_id_fkey"
            columns: ["target_item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
        ]
      }
      mi3dp_content_engagement: {
        Row: {
          content_section: string | null
          created_at: string | null
          engagement_type: string
          id: string
          item_id: string
          reading_progress: number | null
          session_id: string | null
          time_spent_seconds: number | null
          user_id: string | null
        }
        Insert: {
          content_section?: string | null
          created_at?: string | null
          engagement_type: string
          id?: string
          item_id: string
          reading_progress?: number | null
          session_id?: string | null
          time_spent_seconds?: number | null
          user_id?: string | null
        }
        Update: {
          content_section?: string | null
          created_at?: string | null
          engagement_type?: string
          id?: string
          item_id?: string
          reading_progress?: number | null
          session_id?: string | null
          time_spent_seconds?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_content_engagement_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_content_engagement_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_content_engagement_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_content_engagement_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_content_engagement_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_file_uploads: {
        Row: {
          created_at: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          is_featured: boolean | null
          item_id: string | null
          item_type: string | null
          metadata: Json | null
          original_name: string
          storage_provider_id: string | null
          updated_at: string | null
          upload_status: string | null
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          is_featured?: boolean | null
          item_id?: string | null
          item_type?: string | null
          metadata?: Json | null
          original_name: string
          storage_provider_id?: string | null
          updated_at?: string | null
          upload_status?: string | null
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          is_featured?: boolean | null
          item_id?: string | null
          item_type?: string | null
          metadata?: Json | null
          original_name?: string
          storage_provider_id?: string | null
          updated_at?: string | null
          upload_status?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_file_uploads_storage_provider_id_fkey"
            columns: ["storage_provider_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_storage_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_item_content: {
        Row: {
          auto_generated: boolean | null
          body_json: Json | null
          changelog: Json[] | null
          content_category: string | null
          content_version: number | null
          difficulty_level: string | null
          featured_for_discovery: boolean | null
          generation_method: string | null
          is_published: boolean | null
          item_id: string
          layout_blocks: Json[] | null
          published_at: string | null
          reading_time_minutes: number | null
        }
        Insert: {
          auto_generated?: boolean | null
          body_json?: Json | null
          changelog?: Json[] | null
          content_category?: string | null
          content_version?: number | null
          difficulty_level?: string | null
          featured_for_discovery?: boolean | null
          generation_method?: string | null
          is_published?: boolean | null
          item_id: string
          layout_blocks?: Json[] | null
          published_at?: string | null
          reading_time_minutes?: number | null
        }
        Update: {
          auto_generated?: boolean | null
          body_json?: Json | null
          changelog?: Json[] | null
          content_category?: string | null
          content_version?: number | null
          difficulty_level?: string | null
          featured_for_discovery?: boolean | null
          generation_method?: string | null
          is_published?: boolean | null
          item_id?: string
          layout_blocks?: Json[] | null
          published_at?: string | null
          reading_time_minutes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_item_content_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: true
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_content_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: true
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_content_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: true
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_content_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: true
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_item_relationships: {
        Row: {
          metadata: Json | null
          relationship_type_id: string
          source_item_id: string
          target_item_id: string
        }
        Insert: {
          metadata?: Json | null
          relationship_type_id: string
          source_item_id: string
          target_item_id: string
        }
        Update: {
          metadata?: Json | null
          relationship_type_id?: string
          source_item_id?: string
          target_item_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_item_relationships_relationship_type_id_fkey"
            columns: ["relationship_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_relationship_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_item_tags: {
        Row: {
          item_id: string
          tag_id: string
        }
        Insert: {
          item_id: string
          tag_id: string
        }
        Update: {
          item_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_item_tags_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_tags_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_tags_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_tags_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_item_types: {
        Row: {
          created_at: string
          description: string | null
          icon_name: string | null
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      mi3dp_items: {
        Row: {
          api_access_level: string | null
          attributes: Json | null
          auto_detected_relationships: Json | null
          avg_cost_usd: number | null
          category_id: string
          compatibility_tags: string[] | null
          cons: Json | null
          created_at: string
          featured: boolean | null
          id: string
          image_url: string | null
          item_type_id: string
          last_interaction_at: string | null
          last_viewed_at: string | null
          like_count: number | null
          name: string
          owner_id: string
          pros: Json | null
          search_vec: unknown
          slug: string | null
          status: string
          summary: string | null
          trending_score: number | null
          updated_at: string
          view_count: number | null
          visibility: string | null
        }
        Insert: {
          api_access_level?: string | null
          attributes?: Json | null
          auto_detected_relationships?: Json | null
          avg_cost_usd?: number | null
          category_id?: string
          compatibility_tags?: string[] | null
          cons?: Json | null
          created_at?: string
          featured?: boolean | null
          id: string
          image_url?: string | null
          item_type_id: string
          last_interaction_at?: string | null
          last_viewed_at?: string | null
          like_count?: number | null
          name: string
          owner_id: string
          pros?: Json | null
          search_vec?: unknown
          slug?: string | null
          status?: string
          summary?: string | null
          trending_score?: number | null
          updated_at?: string
          view_count?: number | null
          visibility?: string | null
        }
        Update: {
          api_access_level?: string | null
          attributes?: Json | null
          auto_detected_relationships?: Json | null
          avg_cost_usd?: number | null
          category_id?: string
          compatibility_tags?: string[] | null
          cons?: Json | null
          created_at?: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          item_type_id?: string
          last_interaction_at?: string | null
          last_viewed_at?: string | null
          like_count?: number | null
          name?: string
          owner_id?: string
          pros?: Json | null
          search_vec?: unknown
          slug?: string | null
          status?: string
          summary?: string | null
          trending_score?: number | null
          updated_at?: string
          view_count?: number | null
          visibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "vw_primary_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
        ]
      }
      mi3dp_relationship_intelligence: {
        Row: {
          co_occurrence_count: number | null
          confidence_score: number | null
          created_at: string | null
          discovery_method: string | null
          id: string
          interaction_strength: number | null
          relationship_type_id: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          semantic_similarity: number | null
          source_item_id: string
          status: string | null
          target_item_id: string
          updated_at: string | null
        }
        Insert: {
          co_occurrence_count?: number | null
          confidence_score?: number | null
          created_at?: string | null
          discovery_method?: string | null
          id?: string
          interaction_strength?: number | null
          relationship_type_id?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          semantic_similarity?: number | null
          source_item_id: string
          status?: string | null
          target_item_id: string
          updated_at?: string | null
        }
        Update: {
          co_occurrence_count?: number | null
          confidence_score?: number | null
          created_at?: string | null
          discovery_method?: string | null
          id?: string
          interaction_strength?: number | null
          relationship_type_id?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          semantic_similarity?: number | null
          source_item_id?: string
          status?: string | null
          target_item_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_relationship_intelligence_relationship_type_id_fkey"
            columns: ["relationship_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_relationship_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_relationship_intelligence_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_relationship_types: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
          verb: string
        }
        Insert: {
          created_at?: string
          id: string
          name: string
          updated_at?: string
          verb: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          verb?: string
        }
        Relationships: []
      }
      mi3dp_schema_evolution: {
        Row: {
          admin_request_id: string | null
          affected_rows: number | null
          column_definition: string | null
          column_name: string
          created_at: string
          data_type: string | null
          execution_time_ms: number | null
          id: string
          initiated_by: string | null
          operation: string
          session_id: string | null
          sql_executed: string | null
          table_name: string
        }
        Insert: {
          admin_request_id?: string | null
          affected_rows?: number | null
          column_definition?: string | null
          column_name: string
          created_at?: string
          data_type?: string | null
          execution_time_ms?: number | null
          id?: string
          initiated_by?: string | null
          operation: string
          session_id?: string | null
          sql_executed?: string | null
          table_name: string
        }
        Update: {
          admin_request_id?: string | null
          affected_rows?: number | null
          column_definition?: string | null
          column_name?: string
          created_at?: string
          data_type?: string | null
          execution_time_ms?: number | null
          id?: string
          initiated_by?: string | null
          operation?: string
          session_id?: string | null
          sql_executed?: string | null
          table_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_schema_evolution_admin_request_id_fkey"
            columns: ["admin_request_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_admin_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_schema_evolution_initiated_by_fkey"
            columns: ["initiated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_storage_providers: {
        Row: {
          config: Json
          created_at: string
          id: string
          is_active: boolean
          is_default: boolean
          name: string
          type: string
          updated_at: string
        }
        Insert: {
          config?: Json
          created_at?: string
          id?: string
          is_active?: boolean
          is_default?: boolean
          name: string
          type: string
          updated_at?: string
        }
        Update: {
          config?: Json
          created_at?: string
          id?: string
          is_active?: boolean
          is_default?: boolean
          name?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      mi3dp_tags: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      mi3dp_update_suggestions: {
        Row: {
          admin_notes: string | null
          created_at: string | null
          diff_summary: Json | null
          id: string
          original_data: Json
          original_item_id: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          suggested_by: string | null
          suggested_data: Json
          suggestion_reason: string | null
          updated_at: string | null
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string | null
          diff_summary?: Json | null
          id?: string
          original_data: Json
          original_item_id: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          suggested_by?: string | null
          suggested_data: Json
          suggestion_reason?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_notes?: string | null
          created_at?: string | null
          diff_summary?: Json | null
          id?: string
          original_data?: Json
          original_item_id?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          suggested_by?: string | null
          suggested_data?: Json
          suggestion_reason?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_update_suggestions_original_item_id_fkey"
            columns: ["original_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_update_suggestions_original_item_id_fkey"
            columns: ["original_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_update_suggestions_original_item_id_fkey"
            columns: ["original_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_update_suggestions_original_item_id_fkey"
            columns: ["original_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_update_suggestions_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_update_suggestions_suggested_by_fkey"
            columns: ["suggested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_user_interactions: {
        Row: {
          created_at: string | null
          error_message: string | null
          filter_state: Json | null
          id: string
          interaction_context: Json | null
          interaction_type: string
          ip_address: unknown
          item_id: string
          journey_step: number | null
          page_context: string | null
          previous_interaction_id: string | null
          response_time_ms: number | null
          search_query: string | null
          session_id: string | null
          success: boolean | null
          target_slug: string | null
          target_type: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          filter_state?: Json | null
          id?: string
          interaction_context?: Json | null
          interaction_type: string
          ip_address?: unknown
          item_id: string
          journey_step?: number | null
          page_context?: string | null
          previous_interaction_id?: string | null
          response_time_ms?: number | null
          search_query?: string | null
          session_id?: string | null
          success?: boolean | null
          target_slug?: string | null
          target_type?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          filter_state?: Json | null
          id?: string
          interaction_context?: Json | null
          interaction_type?: string
          ip_address?: unknown
          item_id?: string
          journey_step?: number | null
          page_context?: string | null
          previous_interaction_id?: string | null
          response_time_ms?: number | null
          search_query?: string | null
          session_id?: string | null
          success?: boolean | null
          target_slug?: string | null
          target_type?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_user_interactions_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_user_interactions_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_user_interactions_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_user_interactions_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_user_interactions_previous_interaction_id_fkey"
            columns: ["previous_interaction_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_user_interactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_user_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mi3dp_visual_forms: {
        Row: {
          access_level: string
          created_at: string
          created_by: string | null
          form_name: string
          form_schema: Json
          form_type: string
          id: string
          is_active: boolean
          layout_config: Json | null
          parent_form_id: string | null
          target_table: string
          updated_at: string
          updated_by: string | null
          version: number
        }
        Insert: {
          access_level?: string
          created_at?: string
          created_by?: string | null
          form_name: string
          form_schema: Json
          form_type: string
          id?: string
          is_active?: boolean
          layout_config?: Json | null
          parent_form_id?: string | null
          target_table: string
          updated_at?: string
          updated_by?: string | null
          version?: number
        }
        Update: {
          access_level?: string
          created_at?: string
          created_by?: string | null
          form_name?: string
          form_schema?: Json
          form_type?: string
          id?: string
          is_active?: boolean
          layout_config?: Json | null
          parent_form_id?: string | null
          target_table?: string
          updated_at?: string
          updated_by?: string | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_visual_forms_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_visual_forms_parent_form_id_fkey"
            columns: ["parent_form_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_visual_forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_visual_forms_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding_step_templates: {
        Row: {
          content: string
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_active: boolean | null
          key: string
          order_index: number
          published_version: number | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          key: string
          order_index?: number
          published_version?: number | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          key?: string
          order_index?: number
          published_version?: number | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_step_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding_steps: {
        Row: {
          content: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          is_required: boolean | null
          key: string
          order_index: number
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_required?: boolean | null
          key: string
          order_index?: number
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_required?: boolean | null
          key?: string
          order_index?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          created_by: string | null
          display_name: string | null
          email: string
          email_verified_at: string | null
          full_name: string | null
          id: string
          last_active_at: string | null
          last_login_at: string | null
          login_count: number | null
          monthly_usage_reset_at: string | null
          organization_id: string | null
          permissions: Json | null
          phone_verified_at: string | null
          preferences: Json | null
          primary_role: string
          profile_completeness: number | null
          profile_data: Json | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_expires_at: string | null
          subscription_status: string | null
          subscription_tier: string
          tenant_id: string
          two_factor_enabled: boolean | null
          updated_at: string | null
          updated_by: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          created_by?: string | null
          display_name?: string | null
          email: string
          email_verified_at?: string | null
          full_name?: string | null
          id: string
          last_active_at?: string | null
          last_login_at?: string | null
          login_count?: number | null
          monthly_usage_reset_at?: string | null
          organization_id?: string | null
          permissions?: Json | null
          phone_verified_at?: string | null
          preferences?: Json | null
          primary_role?: string
          profile_completeness?: number | null
          profile_data?: Json | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_expires_at?: string | null
          subscription_status?: string | null
          subscription_tier?: string
          tenant_id?: string
          two_factor_enabled?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          created_by?: string | null
          display_name?: string | null
          email?: string
          email_verified_at?: string | null
          full_name?: string | null
          id?: string
          last_active_at?: string | null
          last_login_at?: string | null
          login_count?: number | null
          monthly_usage_reset_at?: string | null
          organization_id?: string | null
          permissions?: Json | null
          phone_verified_at?: string | null
          preferences?: Json | null
          primary_role?: string
          profile_completeness?: number | null
          profile_data?: Json | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_expires_at?: string | null
          subscription_status?: string | null
          subscription_tier?: string
          tenant_id?: string
          two_factor_enabled?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_admin_audit_log: {
        Row: {
          action_type: string
          actor_user_id: string
          details: Json | null
          id: string
          item_id: string | null
          item_type: string
          timestamp: string
        }
        Insert: {
          action_type: string
          actor_user_id: string
          details?: Json | null
          id: string
          item_id?: string | null
          item_type: string
          timestamp?: string
        }
        Update: {
          action_type?: string
          actor_user_id?: string
          details?: Json | null
          id?: string
          item_id?: string | null
          item_type?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_admin_audit_log_actor_user_id_fkey"
            columns: ["actor_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_design_tokens: {
        Row: {
          id: string
          token_name: string
          token_type: string
          token_value: string
          version_id: string
        }
        Insert: {
          id: string
          token_name: string
          token_type: string
          token_value: string
          version_id: string
        }
        Update: {
          id?: string
          token_name?: string
          token_type?: string
          token_value?: string
          version_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_design_tokens_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "pulseos_theme_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_dynamic_settings: {
        Row: {
          created_at: string
          created_by_user_id: string | null
          description: string | null
          id: string
          key_name: string
          scope: string | null
          setting_type: string | null
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          id: string
          key_name: string
          scope?: string | null
          setting_type?: string | null
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          id?: string
          key_name?: string
          scope?: string | null
          setting_type?: string | null
          updated_at?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_dynamic_settings_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_feature_flags: {
        Row: {
          config_data: Json | null
          created_at: string
          created_by_user_id: string | null
          description: string | null
          id: string
          is_enabled_globally: boolean
          name: string
          scope_areas: string[] | null
          scope_devices: string[] | null
          scope_roles: string[] | null
          updated_at: string
        }
        Insert: {
          config_data?: Json | null
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          id: string
          is_enabled_globally?: boolean
          name: string
          scope_areas?: string[] | null
          scope_devices?: string[] | null
          scope_roles?: string[] | null
          updated_at?: string
        }
        Update: {
          config_data?: Json | null
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          id?: string
          is_enabled_globally?: boolean
          name?: string
          scope_areas?: string[] | null
          scope_devices?: string[] | null
          scope_roles?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_feature_flags_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_page_layout_versions: {
        Row: {
          created_at: string
          created_by_user_id: string | null
          id: string
          is_live: boolean
          layout_data: Json
          layout_id: string
          status: string
          updated_at: string
          version_number: number
        }
        Insert: {
          created_at?: string
          created_by_user_id?: string | null
          id: string
          is_live?: boolean
          layout_data: Json
          layout_id: string
          status?: string
          updated_at?: string
          version_number: number
        }
        Update: {
          created_at?: string
          created_by_user_id?: string | null
          id?: string
          is_live?: boolean
          layout_data?: Json
          layout_id?: string
          status?: string
          updated_at?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_pulseos_page_layout_versions_layout_id"
            columns: ["layout_id"]
            isOneToOne: false
            referencedRelation: "pulseos_page_layouts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pulseos_page_layout_versions_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_page_layouts: {
        Row: {
          active_version_id: string | null
          created_at: string
          created_by_user_id: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          page_path: string
          updated_at: string
        }
        Insert: {
          active_version_id?: string | null
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          id: string
          is_active?: boolean | null
          name: string
          page_path: string
          updated_at?: string
        }
        Update: {
          active_version_id?: string | null
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          page_path?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_page_layouts_active_version_id_fkey"
            columns: ["active_version_id"]
            isOneToOne: false
            referencedRelation: "pulseos_page_layout_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pulseos_page_layouts_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_skeletons: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_enabled: boolean | null
          skeleton_type: string
          skeleton_value: string
          theme_id: string
          updated_at: string | null
          variation: string | null
          zone: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_enabled?: boolean | null
          skeleton_type: string
          skeleton_value: string
          theme_id: string
          updated_at?: string | null
          variation?: string | null
          zone: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_enabled?: boolean | null
          skeleton_type?: string
          skeleton_value?: string
          theme_id?: string
          updated_at?: string | null
          variation?: string | null
          zone?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_skeletons_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_theme_assets: {
        Row: {
          asset_name: string
          asset_type: string
          associated_layout_version_id: string | null
          associated_theme_version_id: string | null
          id: string
          metadata: Json | null
          mime_type: string | null
          size_bytes: number | null
          storage_path: string
          uploaded_at: string
          uploaded_by_user_id: string | null
          url: string
        }
        Insert: {
          asset_name: string
          asset_type: string
          associated_layout_version_id?: string | null
          associated_theme_version_id?: string | null
          id: string
          metadata?: Json | null
          mime_type?: string | null
          size_bytes?: number | null
          storage_path: string
          uploaded_at?: string
          uploaded_by_user_id?: string | null
          url: string
        }
        Update: {
          asset_name?: string
          asset_type?: string
          associated_layout_version_id?: string | null
          associated_theme_version_id?: string | null
          id?: string
          metadata?: Json | null
          mime_type?: string | null
          size_bytes?: number | null
          storage_path?: string
          uploaded_at?: string
          uploaded_by_user_id?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_theme_assets_associated_layout_version_id_fkey"
            columns: ["associated_layout_version_id"]
            isOneToOne: false
            referencedRelation: "pulseos_page_layout_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pulseos_theme_assets_uploaded_by_user_id_fkey"
            columns: ["uploaded_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_theme_tokens: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          is_enabled: boolean | null
          region: string
          sort_order: number | null
          token_category: string
          token_name: string
          token_value: string
          variation: string | null
          version_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_enabled?: boolean | null
          region: string
          sort_order?: number | null
          token_category: string
          token_name: string
          token_value: string
          variation?: string | null
          version_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_enabled?: boolean | null
          region?: string
          sort_order?: number | null
          token_category?: string
          token_name?: string
          token_value?: string
          variation?: string | null
          version_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_theme_tokens_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_theme_versions: {
        Row: {
          created_at: string
          id: string
          is_active: boolean | null
          theme_id: string
          version_string: string
        }
        Insert: {
          created_at?: string
          id: string
          is_active?: boolean | null
          theme_id: string
          version_string: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          theme_id?: string
          version_string?: string
        }
        Relationships: [
          {
            foreignKeyName: "pulseos_theme_versions_theme_id_fkey"
            columns: ["theme_id"]
            isOneToOne: false
            referencedRelation: "pulseos_themes"
            referencedColumns: ["id"]
          },
        ]
      }
      pulseos_themes: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_available_to_users: boolean | null
          is_default: boolean | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id: string
          is_available_to_users?: boolean | null
          is_default?: boolean | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_available_to_users?: boolean | null
          is_default?: boolean | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      pwa_health_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          id: string
          message: string
          resolved: boolean | null
          resolved_at: string | null
          service_name: string
          severity: string
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          id?: string
          message: string
          resolved?: boolean | null
          resolved_at?: string | null
          service_name: string
          severity: string
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          id?: string
          message?: string
          resolved?: boolean | null
          resolved_at?: string | null
          service_name?: string
          severity?: string
        }
        Relationships: []
      }
      pwa_health_metrics: {
        Row: {
          id: string
          metadata: Json | null
          metric_type: string
          metric_value: number
          service_name: string
          timestamp: string | null
        }
        Insert: {
          id?: string
          metadata?: Json | null
          metric_type: string
          metric_value: number
          service_name: string
          timestamp?: string | null
        }
        Update: {
          id?: string
          metadata?: Json | null
          metric_type?: string
          metric_value?: number
          service_name?: string
          timestamp?: string | null
        }
        Relationships: []
      }
      pwa_service_registry: {
        Row: {
          healthy_services: number | null
          id: string
          last_updated: string | null
          registry_state: Json | null
          total_services: number | null
        }
        Insert: {
          healthy_services?: number | null
          id?: string
          last_updated?: string | null
          registry_state?: Json | null
          total_services?: number | null
        }
        Update: {
          healthy_services?: number | null
          id?: string
          last_updated?: string | null
          registry_state?: Json | null
          total_services?: number | null
        }
        Relationships: []
      }
      pwa_services: {
        Row: {
          created_at: string | null
          health_data: Json | null
          id: string
          last_health_check: string | null
          name: string
          status: string
          updated_at: string | null
          version: string
        }
        Insert: {
          created_at?: string | null
          health_data?: Json | null
          id?: string
          last_health_check?: string | null
          name: string
          status: string
          updated_at?: string | null
          version: string
        }
        Update: {
          created_at?: string | null
          health_data?: Json | null
          id?: string
          last_health_check?: string | null
          name?: string
          status?: string
          updated_at?: string | null
          version?: string
        }
        Relationships: []
      }
      pwa_system_alerts: {
        Row: {
          created_at: string | null
          id: string
          message: string
          metadata: Json | null
          severity: number
          source: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          metadata?: Json | null
          severity?: number
          source?: string | null
          status?: string
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          metadata?: Json | null
          severity?: number
          source?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      role_applications: {
        Row: {
          id: string
          metadata: Json | null
          reason: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          role: Database["public"]["Enums"]["admin_role"]
          status: string | null
          submitted_at: string | null
          user_id: string
        }
        Insert: {
          id?: string
          metadata?: Json | null
          reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          role: Database["public"]["Enums"]["admin_role"]
          status?: string | null
          submitted_at?: string | null
          user_id: string
        }
        Update: {
          id?: string
          metadata?: Json | null
          reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          role?: Database["public"]["Enums"]["admin_role"]
          status?: string | null
          submitted_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_applications_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      security_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          description: string
          id: string
          metadata: Json | null
          resolved: boolean | null
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          user_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          description: string
          id?: string
          metadata?: Json | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          user_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          description?: string
          id?: string
          metadata?: Json | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "security_alerts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      system_roles: {
        Row: {
          granted_at: string | null
          granted_by: string | null
          id: string
          is_active: boolean | null
          permissions: Json | null
          role_code: string
          role_name: string
          service_account_id: string
        }
        Insert: {
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          permissions?: Json | null
          role_code: string
          role_name: string
          service_account_id: string
        }
        Update: {
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          permissions?: Json | null
          role_code?: string
          role_name?: string
          service_account_id?: string
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          is_public: boolean | null
          key: string
          updated_at: string | null
          updated_by: string | null
          value: Json
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          key: string
          updated_at?: string | null
          updated_by?: string | null
          value: Json
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          key?: string
          updated_at?: string | null
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      user_activity: {
        Row: {
          activity_type: string
          created_at: string | null
          created_by: string | null
          description: string | null
          details: string | null
          id: string
          ip_address: unknown
          metadata: Json | null
          resource_id: string | null
          resource_type: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          activity_type: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          details?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          activity_type?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          details?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_activity_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_activity_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_addon_purchases: {
        Row: {
          addon_id: string
          created_at: string | null
          credits_granted: number | null
          credits_used: number | null
          currency: string
          expires_at: string | null
          features_unlocked: Json | null
          id: string
          payment_provider_id: string | null
          price_paid: number
          profile_id: string
          purchased_at: string | null
          status: string | null
          tenant_id: string
          tokens_granted: number | null
          tokens_used: number | null
          updated_at: string | null
        }
        Insert: {
          addon_id: string
          created_at?: string | null
          credits_granted?: number | null
          credits_used?: number | null
          currency: string
          expires_at?: string | null
          features_unlocked?: Json | null
          id?: string
          payment_provider_id?: string | null
          price_paid: number
          profile_id: string
          purchased_at?: string | null
          status?: string | null
          tenant_id: string
          tokens_granted?: number | null
          tokens_used?: number | null
          updated_at?: string | null
        }
        Update: {
          addon_id?: string
          created_at?: string | null
          credits_granted?: number | null
          credits_used?: number | null
          currency?: string
          expires_at?: string | null
          features_unlocked?: Json | null
          id?: string
          payment_provider_id?: string | null
          price_paid?: number
          profile_id?: string
          purchased_at?: string | null
          status?: string | null
          tenant_id?: string
          tokens_granted?: number | null
          tokens_used?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_addon_purchases_addon_id_fkey"
            columns: ["addon_id"]
            isOneToOne: false
            referencedRelation: "addon_definitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_addon_purchases_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_monthly_usage: {
        Row: {
          ai_queries_used: number | null
          api_calls_used: number | null
          created_at: string | null
          data_exports_used: number | null
          id: string
          month_year: string
          profile_id: string
        }
        Insert: {
          ai_queries_used?: number | null
          api_calls_used?: number | null
          created_at?: string | null
          data_exports_used?: number | null
          id?: string
          month_year: string
          profile_id: string
        }
        Update: {
          ai_queries_used?: number | null
          api_calls_used?: number | null
          created_at?: string | null
          data_exports_used?: number | null
          id?: string
          month_year?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_monthly_usage_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_onboarding_progress: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          skipped_at: string | null
          status: string | null
          step_key: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          skipped_at?: string | null
          status?: string | null
          step_key: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          skipped_at?: string | null
          status?: string | null
          step_key?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_onboarding_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_presence: {
        Row: {
          active_channel: string | null
          last_seen: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          active_channel?: string | null
          last_seen?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          active_channel?: string | null
          last_seen?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_presence_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_role_definitions: {
        Row: {
          category: string
          default_expiry_days: number | null
          description: string | null
          is_auto_assignable: boolean | null
          role_code: string
          role_name: string
        }
        Insert: {
          category?: string
          default_expiry_days?: number | null
          description?: string | null
          is_auto_assignable?: boolean | null
          role_code: string
          role_name: string
        }
        Update: {
          category?: string
          default_expiry_days?: number | null
          description?: string | null
          is_auto_assignable?: boolean | null
          role_code?: string
          role_name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          expires_at: string | null
          granted_at: string | null
          granted_by: string | null
          id: string
          is_active: boolean | null
          metadata: Json | null
          role_code: string
          role_name: string
          user_id: string
        }
        Insert: {
          expires_at?: string | null
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          role_code: string
          role_name: string
          user_id: string
        }
        Update: {
          expires_at?: string | null
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          role_code?: string
          role_name?: string
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          created_at: string | null
          device_info: Json | null
          expires_at: string
          id: string
          ip_address: unknown
          is_active: boolean | null
          last_activity: string | null
          location: string | null
          session_token: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          device_info?: Json | null
          expires_at: string
          id?: string
          ip_address?: unknown
          is_active?: boolean | null
          last_activity?: string | null
          location?: string | null
          session_token: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          device_info?: Json | null
          expires_at?: string
          id?: string
          ip_address?: unknown
          is_active?: boolean | null
          last_activity?: string | null
          location?: string | null
          session_token?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_settings: {
        Row: {
          chat_enabled: boolean | null
          created_at: string | null
          default_module: string | null
          enable_animations: boolean | null
          enable_sfx: boolean | null
          landing_preference: string | null
          onboarding_complete: boolean | null
          preferred_language: string | null
          receive_email_updates: boolean | null
          show_xp_bar: boolean | null
          theme_variant: string
          ui_density: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          chat_enabled?: boolean | null
          created_at?: string | null
          default_module?: string | null
          enable_animations?: boolean | null
          enable_sfx?: boolean | null
          landing_preference?: string | null
          onboarding_complete?: boolean | null
          preferred_language?: string | null
          receive_email_updates?: boolean | null
          show_xp_bar?: boolean | null
          theme_variant?: string
          ui_density?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          chat_enabled?: boolean | null
          created_at?: string | null
          default_module?: string | null
          enable_animations?: boolean | null
          enable_sfx?: boolean | null
          landing_preference?: string | null
          onboarding_complete?: boolean | null
          preferred_language?: string | null
          receive_email_updates?: boolean | null
          show_xp_bar?: boolean | null
          theme_variant?: string
          ui_density?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      impulse_notification_counts_view: {
        Row: {
          last_updated: string | null
          site_count: number | null
          total: number | null
          user_count: number | null
        }
        Relationships: []
      }
      impulse_notifications_visible: {
        Row: {
          action_text: string | null
          action_url: string | null
          auto_dismiss: boolean | null
          auto_dismiss_delay: number | null
          created_at: string | null
          data: Json | null
          dismissed: boolean | null
          dismissible: boolean | null
          expires_at: string | null
          id: string | null
          message: string | null
          priority: string | null
          read: boolean | null
          scope: string | null
          sender_avatar: string | null
          sender_id: string | null
          sender_name: string | null
          severity: string | null
          source: string | null
          target_audience: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          user_id: string | null
          xp_awarded: number | null
          xp_claimed: boolean | null
        }
        Relationships: []
      }
      impulse_user_notifications_current: {
        Row: {
          action_text: string | null
          action_url: string | null
          auto_dismiss: boolean | null
          auto_dismiss_delay: number | null
          created_at: string | null
          data: Json | null
          dismissed: boolean | null
          dismissible: boolean | null
          expires_at: string | null
          id: string | null
          message: string | null
          priority: string | null
          read: boolean | null
          scope: string | null
          sender_avatar: string | null
          sender_id: string | null
          sender_name: string | null
          severity: string | null
          source: string | null
          target_audience: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          user_id: string | null
          xp_awarded: number | null
          xp_claimed: boolean | null
        }
        Insert: {
          action_text?: string | null
          action_url?: string | null
          auto_dismiss?: boolean | null
          auto_dismiss_delay?: number | null
          created_at?: string | null
          data?: Json | null
          dismissed?: never
          dismissible?: boolean | null
          expires_at?: string | null
          id?: string | null
          message?: string | null
          priority?: string | null
          read?: boolean | null
          scope?: never
          sender_avatar?: string | null
          sender_id?: string | null
          sender_name?: string | null
          severity?: string | null
          source?: string | null
          target_audience?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
          xp_awarded?: number | null
          xp_claimed?: boolean | null
        }
        Update: {
          action_text?: string | null
          action_url?: string | null
          auto_dismiss?: boolean | null
          auto_dismiss_delay?: number | null
          created_at?: string | null
          data?: Json | null
          dismissed?: never
          dismissible?: boolean | null
          expires_at?: string | null
          id?: string | null
          message?: string | null
          priority?: string | null
          read?: boolean | null
          scope?: never
          sender_avatar?: string | null
          sender_id?: string | null
          sender_name?: string | null
          severity?: string | null
          source?: string | null
          target_audience?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
          xp_awarded?: number | null
          xp_claimed?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "impulse_notifications_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "impulse_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_visible_site_notifications: {
        Row: {
          action_text: string | null
          action_url: string | null
          auto_dismiss: boolean | null
          auto_dismiss_delay: number | null
          created_at: string | null
          data: Json | null
          dismissed: boolean | null
          dismissible: boolean | null
          expires_at: string | null
          id: string | null
          message: string | null
          priority: string | null
          read: boolean | null
          scope: string | null
          sender_avatar: string | null
          sender_id: string | null
          sender_name: string | null
          severity: string | null
          source: string | null
          target_audience: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          user_id: string | null
          xp_awarded: number | null
          xp_claimed: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "impulse_notifications_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "impulse_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      impulse_xp_leaderboard_cred: {
        Row: {
          level: number | null
          rank: number | null
          total_cred: number | null
          user_id: string | null
        }
        Relationships: []
      }
      impulse_xp_leaderboard_daily: {
        Row: {
          daily_points: number | null
          rank: number | null
          user_id: string | null
        }
        Relationships: []
      }
      impulse_xp_leaderboard_decay: {
        Row: {
          decayed_points: number | null
          rank: number | null
          user_id: string | null
        }
        Relationships: []
      }
      impulse_xp_leaderboard_weekly: {
        Row: {
          rank: number | null
          user_id: string | null
          weekly_points: number | null
        }
        Relationships: []
      }
      vw_analytics_outbox_pending: {
        Row: {
          actor_id: string | null
          attempts: number | null
          created_at: string | null
          entity: string | null
          id: string | null
          item_id: string | null
          last_error: string | null
          next_attempt_at: string | null
          occurred_at: string | null
          partition_key: string | null
          payload: Json | null
          producer: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          actor_id?: string | null
          attempts?: number | null
          created_at?: string | null
          entity?: string | null
          id?: string | null
          item_id?: string | null
          last_error?: string | null
          next_attempt_at?: string | null
          occurred_at?: string | null
          partition_key?: string | null
          payload?: Json | null
          producer?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          actor_id?: string | null
          attempts?: number | null
          created_at?: string | null
          entity?: string | null
          id?: string | null
          item_id?: string | null
          last_error?: string | null
          next_attempt_at?: string | null
          occurred_at?: string | null
          partition_key?: string | null
          payload?: Json | null
          producer?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      vw_build_parts: {
        Row: {
          metadata: Json | null
          relation_name: string | null
          relation_verb: string | null
          source_item_id: string | null
          source_item_type_id: string | null
          source_item_type_slug: string | null
          source_name: string | null
          source_slug: string | null
          target_item_id: string | null
          target_item_type_id: string | null
          target_item_type_slug: string | null
          target_name: string | null
          target_slug: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["source_item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["target_item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["source_item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["target_item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
        ]
      }
      vw_item_detail_expanded: {
        Row: {
          id: string | null
          image_url: string | null
          item_slug: string | null
          item_type_name: string | null
          item_type_slug: string | null
          name: string | null
          status: string | null
          summary: string | null
          tags: Json | null
          visibility: string | null
        }
        Relationships: []
      }
      vw_item_graph_edges: {
        Row: {
          metadata: Json | null
          relationship: string | null
          source_id: string | null
          target_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
        ]
      }
      vw_item_relations: {
        Row: {
          metadata: Json | null
          relation_name: string | null
          relation_verb: string | null
          source_item_id: string | null
          source_item_type_id: string | null
          source_item_type_slug: string | null
          source_name: string | null
          source_slug: string | null
          target_item_id: string | null
          target_item_type_id: string | null
          target_item_type_slug: string | null
          target_name: string | null
          target_slug: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_source_item_id_fkey"
            columns: ["source_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_item_detail_expanded"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "mi3dp_item_relationships_target_item_id_fkey"
            columns: ["target_item_id"]
            isOneToOne: false
            referencedRelation: "vw_items_resolved"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["source_item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["target_item_type_id"]
            isOneToOne: false
            referencedRelation: "mi3dp_item_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["source_item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
          {
            foreignKeyName: "mi3dp_items_item_type_id_fkey"
            columns: ["target_item_type_id"]
            isOneToOne: false
            referencedRelation: "vw_items_explorer"
            referencedColumns: ["item_type_id"]
          },
        ]
      }
      vw_items_explorer: {
        Row: {
          attributes: Json | null
          avg_cost_usd: number | null
          cons: Json | null
          created_at: string | null
          image_url: string | null
          item_id: string | null
          item_slug: string | null
          item_type_id: string | null
          item_type_name: string | null
          item_type_slug: string | null
          name: string | null
          owner_id: string | null
          pros: Json | null
          search_vec: unknown
          status: string | null
          summary: string | null
          tags: Json | null
          trending_score: number | null
          updated_at: string | null
          visibility: string | null
        }
        Relationships: []
      }
      vw_items_resolved: {
        Row: {
          attributes: Json | null
          avg_cost_usd: number | null
          cons: Json | null
          created_at: string | null
          id: string | null
          image_url: string | null
          item_type: string | null
          name: string | null
          owner_id: string | null
          pros: Json | null
          search_vec: unknown
          slug: string | null
          status: string | null
          summary: string | null
          tags: Json | null
          trending_score: number | null
          updated_at: string | null
        }
        Relationships: []
      }
      vw_primary_categories: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string | null
          metadata: Json | null
          name: string | null
          slug: string | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string | null
          metadata?: Json | null
          name?: string | null
          slug?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string | null
          metadata?: Json | null
          name?: string | null
          slug?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      vw_pwa_active_alerts: {
        Row: {
          alert_type: string | null
          created_at: string | null
          id: string | null
          message: string | null
          service_name: string | null
          service_status: string | null
          severity: string | null
        }
        Relationships: []
      }
      vw_pwa_health_overview: {
        Row: {
          degraded_services: number | null
          healthy_services: number | null
          last_health_check: string | null
          total_services: number | null
          unhealthy_services: number | null
          unknown_services: number | null
        }
        Relationships: []
      }
      vw_pwa_recent_metrics: {
        Row: {
          metadata: Json | null
          metric_type: string | null
          metric_value: number | null
          rn: number | null
          service_name: string | null
          timestamp: string | null
        }
        Relationships: []
      }
      vw_pwa_service_health: {
        Row: {
          active_alerts: number | null
          created_at: string | null
          critical_alerts: number | null
          id: string | null
          last_health_check: string | null
          name: string | null
          status: string | null
          version: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      analytics_publish: {
        Args: {
          p_actor_id: string
          p_entity: string
          p_entity_id: string
          p_partition_key?: string
          p_payload: Json
          p_producer: string
          p_type: string
        }
        Returns: string
      }
      check_username_availability: {
        Args: { p_username: string }
        Returns: Json
      }
      compute_item_search_vec: {
        Args: {
          p_attrs: Json
          p_item_id: string
          p_name: string
          p_summary: string
        }
        Returns: unknown
      }
      execute_ddl: { Args: { sql_statement: string }; Returns: Json }
      facet_counts: {
        Args: { p_q?: string; p_type_slug?: string }
        Returns: Json
      }
      generate_slug: { Args: { input_text: string }; Returns: string }
      get_active_categories: {
        Args: never
        Returns: {
          icon: string
          name: string
          slug: string
        }[]
      }
      get_categories_by_tier: {
        Args: {
          p_include_inactive?: boolean
          p_tier?: Database["public"]["Enums"]["category_tier"]
        }
        Returns: Json
      }
      get_categories_overview: {
        Args: { p_include_inactive?: boolean }
        Returns: Json
      }
      get_category_tree: {
        Args: { p_include_inactive?: boolean; p_root_slug?: string }
        Returns: Json
      }
      get_item_detail: { Args: { p_id: string }; Returns: Json }
      get_latest_content_items: { Args: never; Returns: Json }
      get_neighbors: {
        Args: { p_depth?: number; p_id: string; p_relationships?: string[] }
        Returns: {
          metadata: Json
          relationship: string
          source_id: string
          target_id: string
        }[]
      }
      get_primary_categories: { Args: never; Returns: Json }
      get_pwa_health_summary: {
        Args: never
        Returns: {
          degraded_services: number
          health_score: number
          healthy_services: number
          last_check: string
          total_services: number
          unhealthy_services: number
          unknown_services: number
        }[]
      }
      get_sequence_value: { Args: { sequence_name: string }; Returns: number }
      get_session_operations: {
        Args: { session_id: string }
        Returns: {
          error_message: string
          id: string
          operation_details: Json
          operation_type: string
          performed_at: string
          performed_by: string
          status: string
        }[]
      }
      get_table_schema: {
        Args: { table_name: string }
        Returns: {
          character_maximum_length: number
          column_default: string
          column_name: string
          data_type: string
          is_nullable: string
          numeric_precision: number
          numeric_scale: number
          udt_name: string
        }[]
      }
      get_unassigned_category_id: { Args: never; Returns: string }
      get_unassigned_tag_id: { Args: never; Returns: string }
      get_user_primary_role: { Args: never; Returns: string }
      get_user_statistics: { Args: never; Returns: Json }
      get_user_stats: { Args: never; Returns: Json }
      get_user_tier: { Args: never; Returns: string }
      get_viewer_metadata: {
        Args: {
          p_item_type_slug: string
          p_page?: number
          p_page_size?: number
        }
        Returns: Json
      }
      grant_user_role: {
        Args: {
          expires_in_days?: number
          role_code: string
          role_name: string
          target_user_id: string
        }
        Returns: string
      }
      impulse_cleanup_notifications: { Args: never; Returns: number }
      impulse_create_notification: {
        Args: {
          p_data?: Json
          p_message: string
          p_sender_id?: string
          p_source?: string
          p_title: string
          p_type: string
          p_user_id: string
          p_xp_reward?: number
        }
        Returns: string
      }
      impulse_create_site_notification: {
        Args: {
          p_auto_dismiss?: boolean
          p_data?: Json
          p_expires_at?: string
          p_message: string
          p_priority?: string
          p_severity?: string
          p_target_audience?: string
          p_title: string
          p_type: string
        }
        Returns: string
      }
      impulse_dismiss_site: {
        Args: { _notification_id: string }
        Returns: undefined
      }
      impulse_get_counts: {
        Args: never
        Returns: {
          last_updated: string
          site_count: number
          total: number
          user_count: number
        }[]
      }
      impulse_get_notification_counts: {
        Args: { p_user_id: string }
        Returns: {
          site_count: number
          total_count: number
          user_count: number
        }[]
      }
      impulse_get_notifications: {
        Args: { _cursor?: string; _limit?: number; _scope: string }
        Returns: {
          action_text: string
          action_url: string
          auto_dismiss: boolean
          auto_dismiss_delay: number
          created_at: string
          data: Json
          dismissed: boolean
          dismissible: boolean
          expires_at: string
          id: string
          message: string
          priority: string
          read: boolean
          scope: string
          sender_avatar: string
          sender_id: string
          sender_name: string
          severity: string
          source: string
          target_audience: string
          title: string
          type: string
          updated_at: string
          user_id: string
          xp_awarded: number
          xp_claimed: boolean
        }[]
      }
      impulse_mark_all_read: { Args: { _scope: string }; Returns: number }
      impulse_mark_notifications_read: {
        Args: { p_notification_ids: string[]; p_user_id: string }
        Returns: {
          xp_gained: number
        }[]
      }
      impulse_mark_read: {
        Args: { _notification_id: string; _scope: string }
        Returns: undefined
      }
      impulse_xp_award_streak_cred: {
        Args: { p_at: string; p_user: string }
        Returns: undefined
      }
      impulse_xp_decay_lambda: { Args: never; Returns: number }
      impulse_xp_event_category: {
        Args: { p_event_key: string }
        Returns: string
      }
      impulse_xp_is_category_enabled: {
        Args: { p_event_key: string }
        Returns: boolean
      }
      impulse_xp_level_for_cred: { Args: { p_cred: number }; Returns: number }
      impulse_xp_log_event_batch: {
        Args: { p_events: Json }
        Returns: undefined
      }
      impulse_xp_log_reaction_award: {
        Args: {
          p_context?: Json
          p_given_to: string
          p_object_id?: string
          p_object_type?: string
          p_reaction_key: string
        }
        Returns: undefined
      }
      impulse_xp_update_level: { Args: { p_user: string }; Returns: undefined }
      impulse_xp_update_streaks: {
        Args: { p_at: string; p_user: string }
        Returns: undefined
      }
      mask_email: { Args: { email_address: string }; Returns: string }
      preview_next_item_ids: {
        Args: { p_item_type_slug: string; p_sample_size: number }
        Returns: {
          preview_id: string
        }[]
      }
      revoke_user_role: {
        Args: { role_code: string; target_user_id: string }
        Returns: boolean
      }
      search_items: {
        Args: {
          p_filters?: Json
          p_page?: number
          p_page_size?: number
          p_q?: string
          p_sort?: Json
          p_tag_slugs?: string[]
          p_type_slug?: string
        }
        Returns: {
          attributes: Json
          avg_cost_usd: number
          created_at: string
          id: string
          image_url: string
          item_type: string
          name: string
          status: string
          summary: string
          tags: Json
          total_count: number
          trending_score: number
          updated_at: string
        }[]
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
      track_interaction: {
        Args: {
          p_interaction_type: string
          p_item_id: string
          p_page_context?: string
          p_search_query?: string
          p_session_id: string
          p_user_id: string
        }
        Returns: string
      }
      update_trending_scores: { Args: never; Returns: undefined }
      update_user_xp: {
        Args: {
          admin_user_id?: string
          reason: string
          target_user_id: string
          xp_delta: number
        }
        Returns: undefined
      }
      user_has_admin_role: {
        Args: { required_admin_role: string }
        Returns: boolean
      }
      user_has_any_primary_role: {
        Args: { required_roles: string[] }
        Returns: boolean
      }
      user_has_any_tier: {
        Args: { required_tiers: string[] }
        Returns: boolean
      }
      user_has_primary_role: {
        Args: { required_role: string }
        Returns: boolean
      }
      user_has_tier: { Args: { required_tier: string }; Returns: boolean }
      user_has_user_role: { Args: { role_code: string }; Returns: boolean }
      user_is_admin: { Args: never; Returns: boolean }
      user_is_super_admin: { Args: never; Returns: boolean }
      user_matches_target_audience: {
        Args: { p_target_audience: string; p_user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      admin_role:
        | "super_admin"
        | "admin"
        | "moderator"
        | "content_admin"
        | "community_admin"
        | "catalog_admin"
        | "custom_admin"
      attribute_data_type:
        | "text"
        | "number"
        | "boolean"
        | "json"
        | "url"
        | "email"
        | "date"
        | "array"
      category_tier: "primary" | "secondary" | "tertiary"
      content_type: "page" | "component" | "template" | "workflow"
      contribution_type: "original" | "remix" | "improvement" | "documentation"
      item_status: "draft" | "active" | "archived" | "deprecated"
      post_category:
        | "Guides"
        | "Reviews"
        | "Blog"
        | "Site Updates"
        | "Critical"
        | "3D Printer"
        | "3D Printer Hardware"
      theme_component_type:
        | "color"
        | "typography"
        | "layout"
        | "animation"
        | "effect"
      token_scope: "global" | "component" | "theme" | "responsive" | "state"
      token_type:
        | "color"
        | "spacing"
        | "typography"
        | "animation"
        | "shadow"
        | "border"
        | "gradient"
        | "composite"
      ui_region:
        | "topbar"
        | "sidebar"
        | "footer"
        | "content"
        | "modal"
        | "button"
        | "form"
        | "navigation"
      user_role: "subscriber" | "maker" | "admin" | "super_admin"
      workflow_stage_type:
        | "approval"
        | "review"
        | "task"
        | "notification"
        | "conditional"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: [
        "super_admin",
        "admin",
        "moderator",
        "content_admin",
        "community_admin",
        "catalog_admin",
        "custom_admin",
      ],
      attribute_data_type: [
        "text",
        "number",
        "boolean",
        "json",
        "url",
        "email",
        "date",
        "array",
      ],
      category_tier: ["primary", "secondary", "tertiary"],
      content_type: ["page", "component", "template", "workflow"],
      contribution_type: ["original", "remix", "improvement", "documentation"],
      item_status: ["draft", "active", "archived", "deprecated"],
      post_category: [
        "Guides",
        "Reviews",
        "Blog",
        "Site Updates",
        "Critical",
        "3D Printer",
        "3D Printer Hardware",
      ],
      theme_component_type: [
        "color",
        "typography",
        "layout",
        "animation",
        "effect",
      ],
      token_scope: ["global", "component", "theme", "responsive", "state"],
      token_type: [
        "color",
        "spacing",
        "typography",
        "animation",
        "shadow",
        "border",
        "gradient",
        "composite",
      ],
      ui_region: [
        "topbar",
        "sidebar",
        "footer",
        "content",
        "modal",
        "button",
        "form",
        "navigation",
      ],
      user_role: ["subscriber", "maker", "admin", "super_admin"],
      workflow_stage_type: [
        "approval",
        "review",
        "task",
        "notification",
        "conditional",
      ],
    },
  },
} as const
