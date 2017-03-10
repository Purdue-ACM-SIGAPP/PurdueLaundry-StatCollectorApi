class CreateMachineStats < ActiveRecord::Migration[5.0]
  def change
    create_table :machine_stats do |t|
      t.date :time
      t.string :state
      t.integer :timeLeft

      t.timestamps
    end
  end
end
