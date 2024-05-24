module.exports = (srv) => {
    
	srv.before('UPDATE', (req)=>{
        console.log('in update')
        console.log(req.user)
    });
	srv.before('CREATE',  (req)=>{
        console.log(req.user)
    });
	srv.before('DELETE',  (req)=>{
        console.log(req.user)
    });
    srv.before('READ',  (req)=>{
        console.log(req)
    })
    srv.before('UPDATE', 'Galactic_Spacefarer', (req)=>{
        console.log(req)
    });
	srv.before('CREATE','Galactic_Spacefarer',  async(req)=>{
        let tx = cds.transaction();
        let new_id = await tx.run('select sum(id+1) as new_id from my_communitymanager_Galactic_Spacefarer order by id desc limit 1')
        if(req.data['wormhole_navigation_skill']<1)
         throw new Error('wormhole_navigation_skill is too low');
         if(req.data['stardust_collection']<1)
         throw new Error('stardust_collection is too low');
         req.data['id'] = new_id[0].new_id;
        tx.commit();
    });
    srv.after('CREATE','Galactic_Spacefarer',  async(req)=>{
        
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abdelrahmaunaldi@gmail.com',
            pass: 'xamkwelvpwexqgjm'
        }
        });

        var mailOptions = {
        from: 'abdelrahmaunaldi@gmail.com',
        to: 'abdelrahmauneltohamy@gmail.com',
        subject: 'Created',
        text: 'spacefarer created'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    });

    srv.before('DELETE','Galactic_Spacefarer',  (req)=>{
        console.log(req)
    });
    srv.before('READ','Galactic_Spacefarer',  async(req)=>{
     
    })
    const Buckets = 'my.communitymanager.Buckets'

    // Set level of bucket. True -> Full, False -> Empty
    srv.before ('CREATE', 'CallsForDisposal', async (req) => {
    const disposal = req.data
    if (disposal.level == 1) console.log('level = true')
    if (disposal.level == 0) console.log('level = false')
    const tx = cds.transaction(req)
    const affectedRows = await tx.run (
    UPDATE (Buckets)
    .set ({ level: disposal.level})
    .where ({ ID: disposal.bucket_ID})
    )
    })
    }