exports.seed = async function(knex) {
    await knex('cars').truncate()
    return knex('cars').insert([
        {vin: '11111111111111111', make: 'jeep', model: 'cherokee', mileage: 60000, title: 'clean', transmission: 'automatic'},
        {vin: '11111111111111112', make: 'jeep', model: 'wrangler', mileage: 4000, title: 'clean', transmission: 'manual'},
        {vin: '11111111111111113', make: 'toyota', model: 'corolla', mileage: 1000000, title: 'clean', transmission: 'automatic'},
        {vin: '11111111111111114', make: 'honda', model: 'ridgeline', mileage: 40000, title: 'clean', transmission: 'automatic'},
    ])
}